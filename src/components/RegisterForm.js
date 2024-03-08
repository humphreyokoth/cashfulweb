
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import '@mantine/core/styles.css';

const RegisterForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      
      navigate('/login');
    } catch (error) {
      setError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Create an Account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Link to="/">
          <Anchor size="sm">Log in</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          {/* <Group position="apart" mt="lg">
            <Anchor size="sm" href="#">
              Forgot password?
            </Anchor>
          </Group> */}
          <Button type="submit" fullWidth mt="xl" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
