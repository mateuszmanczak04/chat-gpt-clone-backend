// const express = require('express');
import { Router } from 'express';
import { sendPrompt } from '../controllers/openai';

const router = Router();

router.post('/', sendPrompt);

export default router;
