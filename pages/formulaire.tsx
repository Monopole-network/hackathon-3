import {Box, FormControl, FormHelperText, FormLabel, Input, Textarea} from '@chakra-ui/react'
import {Form, redirect} from 'react-router-dom'

export default function project(){
  return(
    <Box maxW="480px">
      {/* <Form> */}
        <FormControl isRequired mb='40px'>
          <FormLabel>Project name :</FormLabel>
          <Input type="text" name="title"/>
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>

        <FormControl isRequired mb='40px'>
          <FormLabel>Project name :</FormLabel>
          <Textarea placeholder='decriver votre projet' name="description"/>
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>
      {/* </Form> */}
    </Box>
  )
}

// export const createAction = async({ request }) => {
//     return redirect('/');
// }