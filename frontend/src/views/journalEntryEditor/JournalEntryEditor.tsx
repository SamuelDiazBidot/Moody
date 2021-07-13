import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { useEditableControls, ButtonGroup, IconButton, Flex, Container, Editable, EditablePreview, EditableInput, HStack, Textarea, Button, Spacer, Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import { DatePicker } from './DatePicker'
import MoodSelector from './MoodSelector'

const JournalEntryEditor = () => {
    function EditableControls() {
        const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
        <ButtonGroup size="sm">
            <IconButton aria-label="check" icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <IconButton aria-label="close" icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
        ) : (
        <Flex>
            <IconButton aria-label="edit" size="sm" variant="ghost" icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
        )
    }

    const [startDate, setStartDate] = useState(new Date());
    const [selectedMoods, setSelectedMoods] = useState<Set<string>>(new Set())
    const [journalTitle, setJournalTitle] = useState<string>("")
    const [journalContent, setJournalContent] = useState<string>("") 

    return (
        <Container maxW="container.xl" p={4}>
            <Flex direction="column">
                <Flex m={2} direction={{base: "column", md: "row"}}>
                    <Editable defaultValue="New Journal Entry" onSubmit={(title) => setJournalTitle(title)} fontSize="2xl" isPreviewFocusable={false}>
                        <HStack>
                            <EditablePreview />
                            <EditableInput />
                            <EditableControls />
                        </HStack>
                    </Editable>
                    <Spacer/>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </Flex>
            <MoodSelector selectedMoods={selectedMoods} setSelectedMoods={setSelectedMoods}/>
            <Textarea minH="25vh" placeholder="Whats on your mind?" onChange={(e) => setJournalContent(e.target.value)}/>
            <Box flex={1} >
                {/* TODO: Having trouble with the responsive design. I want the button to only chage its width on small screen sizes */}
                <Button my={2} variant="solid" colorScheme="blue" width={{base: "full", md: 40}}>
                    Submit
                </Button>
            </Box>
            </Flex>
        </Container>
    )
}

export default JournalEntryEditor
