export default {
    name: {
        presence: true,
        length: {
            minimum: 1,
            maximum: 40
        }
    },
    email: {
        presence: true,
        email: true,
        length: { maximum: 250 }
    },
    subject: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 80
        }
    },
    message: {
        presence: true,
        length: { maximum: 250 }
    }
}