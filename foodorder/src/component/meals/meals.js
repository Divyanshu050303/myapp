import React, {Fragment} from 'react'
import MealsSummary from './mealSummary'
import AvailableMeal from './AvailableMeal'
const meals = () => {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeal/>
    </Fragment>
  )
}

export default meals
