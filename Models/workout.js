const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'What exercise did you do?'
            },
            type: {
                type: String,
                trim: true,
                required: 'What type of exercise did you do? (resistance or cardio?)'
            },
            weight: {
                type: Number,
                trim: true,
                required: 'How much did you lift?'
            },
            sets: {
                type: Number,
                trim: true,
                required: 'How many sets did you do?'
            },
            reps: {
                type: Number,
                trim: true,
                required: 'How many reps did you do?'
            },
            duration: {
                type: Number,
                trim: true,
                required: 'How long did you workout for?'
            },
            distance: {
                type: String,
                trim: true,
                required: 'What is the distance of your workout?'
            }
        }
    ]
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;