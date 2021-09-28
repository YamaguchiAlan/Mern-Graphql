import Message from '../../models/Message'

const Query = {

    messages: async () => {
        return await Message.find()
    }

}

export default Query