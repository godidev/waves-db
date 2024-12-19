import Router from 'express'
import { SurfForecastController } from '../controllers/surf-forecast'

export const SurfForecastRouter = Router()

SurfForecastRouter.get('/', SurfForecastController.getSurfForecasts)
