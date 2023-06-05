import  express  from 'express'
import toNewDiaryEntry from '../utils'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res)=>{
    res.send(diaryServices.getEntriesWithoutSensitiveData())
})

router.get('/:id', (req, res)=>{
    const diary = diaryServices.findById(Number(req.params.id))
    return (diary != null) 
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/',(req, res)=>{
    try{
        const newdDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newdDiaryEntry)
    
        res.json(addedDiaryEntry)

    }catch(error:any){
        res.status(400).send(error.message)
    }

    
})

export default router;