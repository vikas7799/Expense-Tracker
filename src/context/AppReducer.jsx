export default (state, action) => {
    switch (action.type) {
        case "DEL":
            return {
                ...state,
                transcations: state.transcations.

                    filter(transcation =>
                        transcation.id !== action.payload)
            }
            case "ADD":
                return{
                    ...state,
                    transcations:[...state.transcations,action.payload]

            }

        default:
            return state;
    }
}