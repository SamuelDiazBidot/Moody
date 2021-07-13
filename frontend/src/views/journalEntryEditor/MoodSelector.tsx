import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, Menu, MenuButton, Button, MenuList, InputGroup, InputLeftElement, Input, MenuDivider, MenuItem, HStack, Tag, TagLabel, TagCloseButton, Box } from '@chakra-ui/react';
import React, {useState} from 'react'

const MoodSelector = (props: {selectedMoods: Set<string>, setSelectedMoods: React.Dispatch<React.SetStateAction<Set<string>>>}) => {
    const Moods: string[] = ["Happy", "Sad", "Angry", "Bored", "Anxious", "Tired", "Irritated"];
    const {selectedMoods, setSelectedMoods} = props

    const [moodQuery, setMoodQuery] = useState<string>("")

    const addSelectedMood = (mood: string) => {
        setSelectedMoods(moods => new Set(moods.add(mood)))
    }

    const removeSelectedMood = (mood: string) => {
        selectedMoods.delete(mood)
        setSelectedMoods(new Set(selectedMoods))
    }

    const moodFilter = (mood: string) => {
        if (moodQuery === "") {
            return mood
        } else if (mood.toLowerCase().includes(moodQuery.toLowerCase())) {
            return mood
        }
    }

    return (
        <Flex m={2}>
            <Menu autoSelect={false}>
                <MenuButton as={Button} rightIcon={<AddIcon/>}>
                    Add mood
                </MenuButton>
                <MenuList>
                    {/* TODO: Once the menu items state is updated the inputs focus is reset */}
                    <InputGroup p={0}>
                        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                        <Input placeholder="Search mood..." variant="flushed" onChange={(event) => setMoodQuery(event.target.value)}/>
                    </InputGroup>
                    {Moods.filter((mood) => moodFilter(mood)).map((mood) => 
                        <MenuItem key={mood} onClick={() => addSelectedMood(mood)}>
                            {mood}
                        </MenuItem>
                    )}
                </MenuList>
            </Menu>
            <Box flex={1} m={2}>
                {/* Very inefficient way of doing things. I dont know how to map values of a Set */}
                {/* TODO: Once the mood tags reach the space limit they must be scrollable */}
                {Array.from(selectedMoods).map((selectedMood) => 
                    <Tag mx={1} size="md" borderRadius="full" variant="solid" colorScheme="blue">
                        <TagLabel>{selectedMood}</TagLabel>
                        <TagCloseButton onClick={() => removeSelectedMood(selectedMood)}/>
                    </Tag>
                )}
            </Box>
        </Flex>
    )
}

export default MoodSelector