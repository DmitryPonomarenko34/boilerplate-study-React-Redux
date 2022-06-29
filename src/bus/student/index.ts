//Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { studentActions } from './slice';
import { Student } from './types';

export const useStudent = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student); // Add student to ./src/init/redux/index.ts

    return {
        student,
        updateStudent: (data: Student) => dispatch(studentActions.updateStudent(data)),
    };
};
