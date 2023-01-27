import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Roboto } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Box sx={{textAlign:"center"}} mt={5}>
      <Typography variant="h3" mb={3} gutterBottom>
        Disruptive delivery service
      </Typography>
      <Button component={Link} variant="contained" href="/deliveries" >Find deliveries</Button>
    </Box>
    </>
  )
}
