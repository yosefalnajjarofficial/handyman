const tape = require('tape');

const build = require('../../db/config/build');

const connection = require('../../db/config/connection');

const insertFakeData = require('../../db/config/insertFakeData');

const getUserByEmail = require('../../db/queries/getUserByEmail');
tape('search user by email', async (t) => {
  try{
    await build();
    await insertFakeData();
    const result  = await getUserByEmail('mossa123@gmail.com');
    t.equals(result.rows[0].length,5,'');
  });
s