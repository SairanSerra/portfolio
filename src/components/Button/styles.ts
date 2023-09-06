import { Theme } from '@/@types'
import tw from 'tailwind-styled-components'

export const Button = tw.button<{
  $autoChange: boolean
  $theme: Theme
}>`
w-full
py-2
px-3
relative 
overflow-hidden 
font-medium 
items-center
bg-gray-100 border 
border-gray-100 
rounded-lg 
shadow-inner 
group
flex
justify-center
${({ $autoChange, $theme }) => {
  if ($autoChange) {
    return $theme === 'dark' ? 'text-gray-600 ' : 'text-purple'
  }
}}
`
