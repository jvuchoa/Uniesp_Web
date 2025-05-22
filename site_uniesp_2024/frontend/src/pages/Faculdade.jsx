import React from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'

const Faculdade = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <Typography variant='h3' gutterBottom>
        A Faculdade
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant='body1' paragraph>
          A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho. Com uma infraestrutura moderna e professores altamente qualificados, oferecemos um ambiente vibrante e acolhedor para que nossos alunos possam crescer e alcançar seus objetivos.
        </Typography>
        <Typography variant='body1'>
          Nossos cursos são projetados para formar profissionais capacitados e conscientes de seu papel na sociedade. Junte-se a nós e faça parte de uma comunidade de aprendizado contínuo e inovação.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <img
              src="https://www.termometrodapolitica.com.br/base/wp-content/uploads/e829da902d68c919dcd97a3fba5e12dc.jpg"
              alt="Campus Life"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography variant='h6' gutterBottom mt={2}>
              Vida no Campus
            </Typography>
            <Typography variant='body2'>
              Um ambiente vibrante, cheio de oportunidades para aprendizado, amizade e crescimento pessoal.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <img
              src="https://www.iesp.edu.br/sistema/uploads/imagens/biblioteca/galeria/biblioteca-5-20190315052348.jpg"
              alt="Library"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography variant='h6' gutterBottom mt={2}>
              Biblioteca
            </Typography>
            <Typography variant='body2'>
              Nossa biblioteca moderna oferece uma vasta coleção de livros, revistas e recursos digitais para pesquisa.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <img
              src="https://www.iesp.edu.br/sistema/uploads/imagens/cursos/galeria/bloco-central-2-20200921084659.jpg"
              alt="Main Building"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography variant='h6' gutterBottom mt={2}>
              Prédio Principal
            </Typography>
            <Typography variant='body2'>
              O prédio principal é o coração da nossa instituição, com salas de aula, laboratórios e espaços de convivência.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Faculdade