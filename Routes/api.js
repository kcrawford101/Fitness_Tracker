const router = require('express').Router();
const db = require('../Models/');

// POST
router.post('/api/workouts', (req,res) => {
    db.Workout.create({})
    .then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })

})

//x2 GET
router.get('/api/workouts',(req,res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'

                }
            }
        }

    ])
    .then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })
})
router.get('/api/workouts/range',(req,res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'

                }
            }
        }

    ])
    .sort({_id: -1})
    .limit(7)
    .then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })
})
// PUT
router.put('/api/workouts/:id', ({body,params},res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        {new: true, runValidators: true}

    )
    .then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })
})

//DELETE
router.delete('/api/workouts', ({body},res) => {
    db.Workout.findByIdAndDelete (body.id)
    .then (() => {
        res.json(true)
    })
    .catch((err) => {
        res.json(err)
    })
})

module.exports = router;