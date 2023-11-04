// React
import { useCallback, useMemo, useRef } from 'react'

// Redux
import { selectors } from '../../store'

// Utils
import { COLOMN_DEFS } from './utils'

// Ag Grid
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

// Styles
import styles from './styles/styles.module.css'

/** The DataGrid component for displaying a grid of current employees.
 * @returns {JSX.Element} The DataGrid component.
 */
export default function DataGrid() {
    const gridRef = useRef()
    const rowData = selectors.Employees()

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
        }
    }, [])

    const onFirstDataRendered = useCallback(() => {
        gridRef.current.api.sizeColumnsToFit()
    }, [])

    return (
        <div className={styles.wrapper}>
            <h2>Current Employees</h2>
            <div
                className="ag-theme-alpine"
                style={{ width: '100%', height: '100%' }}
            >
                <AgGridReact
                    className={styles.grid}
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={COLOMN_DEFS}
                    animateRows={true}
                    defaultColDef={defaultColDef}
                    onFirstDataRendered={onFirstDataRendered}
                />
            </div>
        </div>
    )
}
