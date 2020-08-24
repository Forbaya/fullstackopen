const dummy = blogs => 1

const totalLikes = blogs => blogs.reduce((sum, blog) => sum + blog.likes, 0)

const favouriteBlog = blogs => {
    const blog = blogs.reduce((max, blog) => blog.likes > max.likes ? blog : max)

    delete blog._id
    delete blog.__v
    delete blog.url

    return blog
}

module.exports = { dummy, totalLikes, favouriteBlog }
