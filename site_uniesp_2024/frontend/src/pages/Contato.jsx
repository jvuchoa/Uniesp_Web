import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <Container maxWidth="md" sx={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Preencha o formulário abaixo para entrar em contato conosco.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mensagem"
          variant="outlined"
          fullWidth
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Contato;
