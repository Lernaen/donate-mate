import { Router } from 'express'

import * as db from '../db/dbOrganisations.ts'
import { StatusCodes } from 'http-status-codes'

const router = Router()

export default router

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  if (!id || id < 1) {
    return res.sendStatus(StatusCodes.NOT_FOUND)
  }

  try {
    const org = await db.getOrganisationsById(id)
    res.json(org)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
