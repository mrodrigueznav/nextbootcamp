import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import styles from '../styles/Home.module.css';


export default function Home() {
  const [campoValue, setCampoValue] = useState("")

  const onCampoChange = (e) => setCampoValue(e.target.value)
  const handleEnviar = () => console.log(campoValue)
  const handleCancelar = () => console.log('Cancelar')

	return (
		<div className={styles.container}>
			<main className={styles.main}>
        <h2>Demo de form</h2>
        <TextField
          onChange={onCampoChange}
          value={campoValue}
          label={"Campo"}
          />
          <Button onClick={handleEnviar}>Enviar</Button>
          <Button onClick={handleCancelar}>Cancelar</Button>
			</main>
		</div>
	);
}
