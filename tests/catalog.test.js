import { describe, expect, it } from 'vitest'
import { paths } from '../src/paths/index.js'
import { quizzes } from '../src/quizzes/index.js'

describe('the quiz and path lists', () => {
  it.each([
    ['quizzes', quizzes],
    ['paths', paths],
  ])('%s have unique ids, a title and a description', (_, items) => {
    const ids = items.map((i) => i.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const item of items) {
      expect(item.id).toMatch(/^[a-z0-9-]+$/)
      expect(item.title).toBeTruthy()
      expect(item.description).toBeTruthy()
    }
  })

  it("don't share an id between a quiz and a path", () => {
    const quizIds = new Set(quizzes.map((q) => q.id))
    expect(paths.filter((p) => quizIds.has(p.id))).toEqual([])
  })
})
