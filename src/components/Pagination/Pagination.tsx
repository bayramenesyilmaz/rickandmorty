import "./Pagination.css"
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

interface PaginationProps {
    current: number;
    total: number;
    onPageChange: (page: number) => void;
}

const PaginationComp: React.FC<PaginationProps> = ({ current, total, onPageChange }) => {
    return (
        <Pagination
            {...bootstrap5PaginationPreset}
            current={current}
            total={total}
            onPageChange={onPageChange}
        />
    );
}
export default PaginationComp;
