import { createStandaloneToast } from "@chakra-ui/react";

const {toast} =  createStandaloneToast()

export const createToast = ( title, status ) => {

    toast({
        title: title,
        status: status,
        duration: 3000,
        isClosable: false,
        position: "top-right"
    })

}