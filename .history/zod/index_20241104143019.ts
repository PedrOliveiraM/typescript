import { z } from 'zod'
const User = z.object({
  usename: z.string({ message: "Tipo Inválido" })
})

User.parse({ username: 'pedro' })