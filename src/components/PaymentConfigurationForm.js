import { TextInput, NumberInput, Button, Box, Paper, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

const PaymentConfigurationForm = () => {
  const form = useForm({
    initialValues: {
      paymentAmount: 0,
      currency: 'USD',
      description: '',
    },
    validate: {
      paymentAmount: (value) => value > 0 ? null : 'Amount should be greater than 0',
      description: (value) => value.trim().length > 0 ? null : 'Description is required',
    },
  });

  const handleSubmit = (values) => {
    // Generate unique link logic here
    console.log(values);
  };

  return (
    <Box mx="auto" maxWidth={400}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Title order={3} align="center" mb="lg">
          Configure Payment
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <NumberInput
            required
            label="Payment Amount"
            placeholder="Enter payment amount"
            {...form.getInputProps('paymentAmount')}
            mb="md"
          />
          <TextInput
            required
            label="Currency"
            placeholder="Enter currency code"
            {...form.getInputProps('currency')}
            mb="md"
          />
          <TextInput
            required
            label="Description"
            placeholder="Enter payment description"
            {...form.getInputProps('description')}
            mb="md"
          />
          <Button type="submit" fullWidth mt="md" radius="xl" color="blue">
            Generate Link
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default PaymentConfigurationForm;