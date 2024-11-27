import z from 'zod'

const userSchema = z.object({
  name: z.string({
    invalid_type_error: 'Fullname must be a String',
    required_error: 'Fullname is required'
  }),
  username: z.string({
    invalid_type_error: 'username must be a String',
    required_error: 'username is required'
  }),
  password: z.string({
    invalid_type_error: 'Password must be a String',
    required_error: 'Password is required'
  })
})

export function validateUser (object) {
  return userSchema.safeParse(object)
}

export function validatePartialUser (object) {
  return userSchema.partial().safeParse(object)
}
