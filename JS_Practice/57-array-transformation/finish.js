/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

/* const processPosts = arr => {
	return arr.map(e => {
		return {
			postId: e.postId + 1000,
			postAuthor: e.author,
			postCommentsQty: e.commentsQty === undefined ? 0 : e.commentsQty,
		}
	})
} */
const processPosts = arr => {
	return arr.map(e => {
		const { postId, author: postAuthor, commentsQty: postCommentsQty = 0 } = e
		return {
			postId: postId + 1000,
			postAuthor,
			postCommentsQty,
		}
	})
}

const testPosts = [
	{
		postId: 234,
		author: 'robd',
		commentsQty: 5,
	},
	{
		postId: 823,
		author: 'sady',
	},
	{
		postId: 161,
		author: 'merryl',
		commentsQty: 8,
	},
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений
