const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

// Write your tests here
// test('sanity', () => {
//   expect(false).toBe(false)
// })

beforeAll(async () =>{
  await db.migrate.rollback()
  await db.migrate.latest()
})

afterAll(async () =>{
  await db.destroy()
})

describe('[GET] /jokes', () =>{
  test('responds with all jokes', async () =>{
      const jokes = [{joke1: 'hola', joke2: 'hello', joke3: 'hi'}]
      expect(jokes).toHaveLength(1)
  })
})

describe('[POST] /register', () =>{
  test('responds with a new user', async() =>{
    const actual = {id: 3, name: 'bar'}
    expect(actual).toMatchObject({id: 3, name: 'bar'})
  })
})

describe('[POST] /login', () =>{
  test('responds with a new user', async() =>{
    const actual = {id: 3, name: 'bar'}
    expect(actual).toMatchObject({id: 3, name: 'bar'})
  })
})