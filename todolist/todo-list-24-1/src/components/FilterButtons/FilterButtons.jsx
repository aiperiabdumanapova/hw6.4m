import './filterButtons.css';

const FilterButtons = ({setStatus, status}) => {
    return (
        <div className='filterButtons'>
                <button
                className={
                    status === 'all'
                    ? 'filterButtons-btn-active'
                    : ''
                }
                onClick={ () => {
                    setStatus('all')
                }

                }>all</button>
                <button
                 className={
                    status === 'active'
                    ? 'filterButtons-btn-active'
                    : ''
                }
                onClick={ () => {
                    setStatus('active')
                }

                }>active</button>
                <button
                 className={
                    status === 'completed'
                    ? 'filterButtons-btn-active'
                    : ''
                }
                onClick={ () => {
                    setStatus('completed')
                }

                }>completed</button>
                <button
                 className={
                    status === 'important'
                    ? 'filterButtons-btn-active'
                    : ''
                }
                onClick={ () => {
                    setStatus('important')
                }

                }>important</button>
                <button
                 className={
                    status === 'trash'
                    ? 'filterButtons-btn-active'
                    : ''
                }
                onClick={ () => {
                    setStatus('trash')
                }

                }>trash</button>
        </div>
    );
}

export default FilterButtons;
