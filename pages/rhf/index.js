import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Home.module.css';
import TextForm from '../../components/form/TextForm';
import { DataGrid } from '@mui/x-data-grid';

export default function ReacHookForm() {
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm();

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<form>
					<TextForm
						name="type"
						control={control}
						label="Tipo de Pokemon"
						rules={{ required: true }}
					/>
					{errors.pokemon?.type === 'required' && (
						<p>pokemon requerido</p>
					)}
					<Button onClick={handleSubmit()}>Enviar</Button>
					<Button onClick={() => reset()} variant={'outlined'}>
						Reset
					</Button>
				</form>
			</main>
		</div>
	);
}
