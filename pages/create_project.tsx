import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, FormControl, Heading, FormLabel, Input, Textarea, Button, Checkbox, Stack } from '@chakra-ui/react'



export default function Project() {

    const router = useRouter();

    const [step, setStep] = useState(1);

    type CheckedValues = {
        [key: string]: string[];
    };

    const [checkedValues, setCheckedValues] = useState<CheckedValues>({
        2: [],
        3: [],
        4: [],
        5: [],
    });


    const nextStep = () => {
        setStep(step + 1);
    };

    const [allFormResponses, setAllFormResponses] = useState<Array<{ title: string; location: string; description: string; environmentalAction: string; companyMission: string; }>>([]);

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        description: '',
        environmentalAction: '',
        companyMission: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const formResponses = {
            title: formData.title,
            location: formData.location,
            description: formData.description,
            environmentalAction: formData.environmentalAction,
            companyMission: formData.companyMission,
            checkedValues: checkedValues
        };
        console.log(checkedValues);
        const existingResponsesString = localStorage.getItem('allFormResponses');
        const existingResponses = existingResponsesString ? JSON.parse(existingResponsesString) : [];
        const updatedResponses = [...existingResponses, formResponses];
        setAllFormResponses(updatedResponses);
        localStorage.setItem('allFormResponses', JSON.stringify(updatedResponses));
        const retrievedData = localStorage.getItem('formData');

        if (retrievedData) {
            const parsedData = JSON.parse(retrievedData);
            console.log(parsedData);
        } else {
            console.log('Aucune donnée trouvée dans le stockage local pour la clé "formData".');
        }

        setFormData({
            title: '',
            location: '',
            description: '',
            environmentalAction: '',
            companyMission: ''
        });

        setCheckedValues({
            2: [],
            3: [],
            4: [],
            5: [],
        })

        router.push('./dashboard');
    };


    const handleChangeCheckbox = (step: number, value: string) => {
        setCheckedValues((prevValues) => {
            const updatedValues = {
                ...prevValues,
                [step]: (prevValues[step] || []).includes(value)
                    ? (prevValues[step] || []).filter((item) => item !== value)
                    : [...(prevValues[step] || []), value],
            };

            localStorage.setItem('checkedValues', JSON.stringify(updatedValues));

            return updatedValues;
        });
    };


    return (
        <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column"> 
        <Box maxW="1000px" my={10} w="90%" mx="auto" pt="20px">
            {step === 1 && (
                <>
                    <FormControl isRequired mb='40px'>
                        <FormLabel>Project name :</FormLabel>
                        <Input type="text" name="title" onChange={handleChange} value={formData.title} />
                    </FormControl>

                    <FormControl isRequired mb='40px'>
                        <FormLabel>Location :</FormLabel>
                        <Input type="text" name="location" onChange={handleChange} value={formData.location} />
                    </FormControl>

                    <FormControl isRequired mb='40px'>
                        <FormLabel>About the project :</FormLabel>
                        <Textarea placeholder='decriver votre projet' name="description" onChange={handleChange} value={formData.description} />
                    </FormControl>

                    <FormControl isRequired mb='40px'>
                        <FormLabel>Commitment action (Social, Charity, Environmental, Infrastructure, Economy) :</FormLabel>
                        <Input type="text" name="environmentalAction" onChange={handleChange} value={formData.environmentalAction} />
                    </FormControl>

                    <FormControl isRequired mb='40px'>
                        <FormLabel>Company mission :</FormLabel>
                        <Input type="text" name="companyMission" onChange={handleChange} value={formData.companyMission} />
                    </FormControl>
                </>
            )}
            {step === 2 && (
                <>
                    <Box>
                        <Heading color='#8235fe'>Social criteral</Heading>

                        <Heading size='md' my={4}>How does your project or company contribute to improving individuals quality of life?</Heading>

                        <FormControl display="flex" alignItems="center">
                            <Checkbox
                                name="2A"
                                checked={checkedValues[step] ? checkedValues[step].includes('2A') : false}
                                onChange={() => handleChangeCheckbox(step, '2A')} />
                            <FormLabel ml="10px">A. Poverty reduction</FormLabel>
                        </FormControl>

                        <FormControl display="flex" alignItems="center">
                            <Checkbox
                                name="2B"
                                checked={checkedValues[step] ? checkedValues[step].includes('2B') : false}
                                onChange={() => handleChangeCheckbox(step, '2B')} />
                            <FormLabel ml="10px">B. Promotion of access to education</FormLabel>
                        </FormControl>

                        <FormControl display="flex" alignItems="center">
                            <Checkbox
                                name="2C"
                                checked={checkedValues[step] ? checkedValues[step].includes('2C') : false}
                                onChange={() => handleChangeCheckbox(step, '2C')} />
                            <FormLabel ml="10px">C. Support for gender equality</FormLabel>
                        </FormControl>

                        <FormControl display="flex" alignItems="center">
                            <Checkbox
                                name="2D"
                                checked={checkedValues[step] ? checkedValues[step].includes('2D') : false}
                                onChange={() => handleChangeCheckbox(step, '2D')} />
                            <FormLabel ml="10px">D. Promotion of peace and justice</FormLabel>
                        </FormControl>

                        <FormControl display="flex" alignItems="center">
                            <Checkbox
                                name="2E"
                                checked={checkedValues[step] ? checkedValues[step].includes('2E') : false}
                                onChange={() => handleChangeCheckbox(step, '2E')} />
                            <FormLabel ml="10px">E. None of the 4</FormLabel>
                        </FormControl>
                    </Box>
                </>
            )}
            {step === 3 && (
                <>
                    <Heading color='#8235fe'>Environmental Criteria</Heading>

                    <Heading size='md' my={4}>How does your project or company work towards environmental preservation?</Heading>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="3A"
                            checked={checkedValues[step] ? checkedValues[step].includes('3A') : false}
                            onChange={() => handleChangeCheckbox(step, '3A')} />
                        <FormLabel ml="10px">A. Protection of water and water resources</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="3B"
                            checked={checkedValues[step] ? checkedValues[step].includes('3B') : false}
                            onChange={() => handleChangeCheckbox(step, '3B')} />
                        <FormLabel ml="10px">B. Promotion of clean energy sources</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="3C"
                            checked={checkedValues[step] ? checkedValues[step].includes('3C') : false}
                            onChange={() => handleChangeCheckbox(step, '3C')} />
                        <FormLabel ml="10px">C. Reduction of waste and pollution</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="3D"
                            checked={checkedValues[step] ? checkedValues[step].includes('3D') : false}
                            onChange={() => handleChangeCheckbox(step, '3D')} />
                        <FormLabel ml="10px">D. Contribution to the fight against climate change</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="3E"
                            checked={checkedValues[step] ? checkedValues[step].includes('3E') : false}
                            onChange={() => handleChangeCheckbox(step, '3E')} />
                        <FormLabel ml="10px">E. None of the 4</FormLabel>
                    </FormControl>
                </>
            )}
            {step === 4 && (
                <>
                    <Heading color='#8235fe'>Economic Criteria</Heading>

                    <Heading size='md' my={4}>How does your project or company contribute to economic growth and industrial development?</Heading>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="4A"
                            checked={checkedValues[step] ? checkedValues[step].includes('4A') : false}
                            onChange={() => handleChangeCheckbox(step, '4A')} />
                        <FormLabel ml="10px">A. Job creation and decent work</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="4B"
                            checked={checkedValues[step] ? checkedValues[step].includes('4B') : false}
                            onChange={() => handleChangeCheckbox(step, '4B')} />
                        <FormLabel ml="10px">B. Encouragement of innovation and sustainable infrastructure</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="4C"
                            checked={checkedValues[step] ? checkedValues[step].includes('4C') : false}
                            onChange={() => handleChangeCheckbox(step, '4C')} />
                        <FormLabel ml="10px">C. Promotion of financial inclusion</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="4D"
                            checked={checkedValues[step] ? checkedValues[step].includes('4D') : false}
                            onChange={() => handleChangeCheckbox(step, '4D')} />
                        <FormLabel ml="10px">D. Support for small and medium-sized enterprises (SMEs)</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="4E"
                            checked={checkedValues[step] ? checkedValues[step].includes('4E') : false}
                            onChange={() => handleChangeCheckbox(step, '4E')} />
                        <FormLabel ml="10px">E. None of the 4</FormLabel>
                    </FormControl>
                </>
            )}
            {step === 5 && (
                <>
                    <Heading color='#8235fe'>Charity Criteria</Heading>

                    <Heading size='md' my={4}>How does your project or company collaborate with other stakeholders to achieve the SDGs?</Heading>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="5A"
                            checked={checkedValues[step] ? checkedValues[step].includes('5A') : false}
                            onChange={() => handleChangeCheckbox(step, '5A')} />
                        <FormLabel ml="10px">A. Partnership with NGOs</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="5B"
                            checked={checkedValues[step] ? checkedValues[step].includes('5B') : false}
                            onChange={() => handleChangeCheckbox(step, '5B')} />
                        <FormLabel ml="10px">B. Collaboration with local governments</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="5C"
                            checked={checkedValues[step] ? checkedValues[step].includes('5C') : false}
                            onChange={() => handleChangeCheckbox(step, '5C')} />
                        <FormLabel ml="10px">C. Engagement with other companies</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="5D"
                            checked={checkedValues[step] ? checkedValues[step].includes('5D') : false}
                            onChange={() => handleChangeCheckbox(step, '5D')} />
                        <FormLabel ml="10px">D. Support for community volunteer initiatives</FormLabel>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <Checkbox
                            name="5E"
                            checked={checkedValues[step] ? checkedValues[step].includes('5E') : false}
                            onChange={() => handleChangeCheckbox(step, '5E')} />
                        <FormLabel ml="10px">E. None of the 4</FormLabel>
                    </FormControl>
                </>
            )}

            {step < 5 ? (
                <Button my={3} onClick={nextStep} colorScheme='green'>Next</Button>
            ) : (
                <Button my={5} onClick={handleSubmit} colorScheme='green'>Submit</Button>
            )}
        </Box>
        </Flex>

    )
}