import * as Action from '../../../redux/reducers/resultReducer'
import { postServerData } from '../Helper/Helper.js'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data */
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            //  if(result !== []) throw new Error("Couldn't get Result");
            await postServerData(`http://localhost:8080/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}