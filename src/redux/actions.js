import { CHANGE_MODAL_VISIBLE , BLOCK} from './action-types'

export const showModalAction = (record) => {
    return {
        type: CHANGE_MODAL_VISIBLE,
        content: record
    }
}

export const blockUsers = (index) => {
    return {
        type: BLOCK,
        blockUserId: index
    }
}