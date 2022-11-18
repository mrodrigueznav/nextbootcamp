import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Home.module.css';
import TextForm from '../../components/form/TextForm';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react'

const myHeaders = new Headers();
myHeaders.append("x-auth-token", "");
myHeaders.append("x-auth-app", "");
myHeaders.append("x-auth-organization", "0159");
myHeaders.append("x-auth-company", "G007");
myHeaders.append("x-auth-session", "");
myHeaders.append("Content-Type", "application/json; charset=utf-8");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const url2 = "https://api-p03.clientservicepanel.com/restsat/api/pvss/v1/contratos-servicios?rquery=CTRTS_EMP==%27G007%27;CTRTS_DELEG==%2707N2%27;CTRTS_INSP=='01001';CTRTS_FECFIN=gt=%272021-09-09 00:00:00 '"
const url = "https://api-p03.clientservicepanel.com/restsat/api/pvss/v1/contratos-servicios?rquery=CTRTS_EMP==%27G007%27;CTRTS_DELEG==%2707N2%27;CTRTS_INSP=='01001';CTRTS_FECFIN=gt=%272021-09-09 00:00:00 '"
const columns = [
    { field: 'CTRTS_DELEG', headerName: 'Delegacion' },
    { field: 'CTRTS_DES', headerName: 'Descripcion Contrato', width: 300},
    { field: 'CTRTS_NOMPROD', headerName: 'Vendedor', width: 300},
    { field: 'CTRTS_OBS_PUESTO', headerName: 'Puesto', width: 300}
]

export default function ReacHookForm() {
    const [ordenesData, setOrdenesData] = useState([])
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm();

	const fetchOrden = async (data) => {
        const { codigoContrato } = data
		const response = await fetch(
			`https://api-p03.clientservicepanel.com/restsat/api/pvss/v1/contratos-servicios?rquery=CTRTS_EMP==%27G007%27;CTRTS_DELEG==%2707N2%27;CTRTS_CTRT=='${codigoContrato}'`,
			requestOptions
		);
		const ordenData = await response.json();
		console.log(ordenData.data.items);
        setOrdenesData(ordenData.data.items)
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<form>
					<TextForm
						name="codigoContrato"
						control={control}
						label="Contrato"
						rules={{ required: true }}
					/>
					<TextForm
						name="sucursal"
						control={control}
						label="Sucursal"
						rules={{ required: true }}
					/>
					<TextForm
						name="contrato"
						control={control}
						label="Contrato"
						rules={{ required: true }}
					/>
					<TextForm
						name="fechaFinal"
						control={control}
						label="Fecha Final"
						rules={{ required: true }}
					/>
					{errors.fechaFinal?.type === 'required' && <p>FechaFinal requerido</p>}
					<Button onClick={handleSubmit(fetchOrden)}>Enviar</Button>
					<Button onClick={() => reset()} variant={'outlined'}>
						Reset
					</Button>
				</form>
                <div className={styles.mainGrid}>
                    <DataGrid
                    columns={columns}
                    rows={ordenesData}
                    getRowId={(row) => row.RowNumber}
                    />
                </div>
			</main>
		</div>
	);
}
