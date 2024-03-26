// frame:
const drinkSchema = ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        requred: true
    },
    hot: {
        type: Boolean,
        required: true
    }
})

// export function
export default drinkSchema