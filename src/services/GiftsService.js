import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"

class GfitsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log('got gifts', res.data)

        const newGifts = res.data.map(pojo => new Gift(pojo))
        AppState.gifts = newGifts

    }
}


export const gfitsService = new GfitsService