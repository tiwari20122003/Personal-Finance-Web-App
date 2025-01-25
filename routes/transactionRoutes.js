import express from 'express'
import Transaction from '../models/Transaction.js'
const router = express.Router()
import moment from 'moment'

router.post('/add-transaction', async (req, res) => {
  try {
    const newtransaction = new Transaction(req.body)
    await newtransaction.save()

    res.send('Transaction Added successfully')
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/edit-transaction', async (req, res) => {
  try {
    await Transaction.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    )
    res.send('Transaction Updated successfully')
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/get-all-transactions', async (req, res) => {
  try {
    const { frequency, type } = req.body
    let { selectedRange } = req.body
    selectedRange =
      frequency === 'custom' && selectedRange === null ? [] : selectedRange

    const transactions = await Transaction.find({
      ...(frequency !== 'custom'
        ? {
            date: {
              $gt: moment().subtract(Number(req.body.frequency), 'd').toDate(),
            },
          }
        : {
            date: {
              $gte: selectedRange[0],
              $lte: selectedRange[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== 'all' && { type }),
    })

    res.json(transactions)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/delete-transaction', async (req, res) => {
  try {
    await Transaction.findOneAndDelete({ _id: req.body.transactionId })
    res.send('Transaction Deleted successfully')
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/transactions', async (req, res) => {
  try {
    const { userid, frequency, type, selectedRange } = req.query;
    let query = {
      userid: userid
    };

    if (type && type !== 'all') {
      query.type = type;
    }

    if (frequency === 'custom' && selectedRange) {
      query.date = {
        $gte: selectedRange[0],
        $lte: selectedRange[1]
      };
    } else if (frequency === '7') {
      query.date = {
        $gt: moment().subtract(7, 'days').toDate()
      };
    } else if (frequency === '30') {
      query.date = {
        $gt: moment().subtract(30, 'days').toDate()
      };
    } else if (frequency === '365') {
      query.date = {
        $gt: moment().subtract(365, 'days').toDate()
      };
    }

    const transactions = await Transaction.find(query);
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router
