import React from 'react';
import { Container, Title, Text, Flex, Box } from '@mantine/core';
import '@mantine/core/styles.css';

const AccountDashboard = () => {
  const accountData = {
    accountNumber: '',
    accountName: '',
    balance: '',
  };
 
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
          fontSize: 24,
          marginBottom: theme.spacing.xl,
        })}
      >
        Account Dashboard
      </Title>

      <Box
        px={30}
        py={20}
        bg="white"
        shadow="md"
        borderRadius="md"
        sx={{
          border: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Flex direction="column" align="stretch" gap={20}>
          <Text size="sm" weight={500}>
            Account Number
          </Text>
          <Text size="lg">{accountData.accountNumber}</Text>

          <Text size="sm" weight={500}>
            Account Name
          </Text>
          <Text size="lg">{accountData.accountName}</Text>

          <Text size="sm" weight={500}>
            Balance
          </Text>
          <Text size="lg">{accountData.balance}</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default AccountDashboard;
