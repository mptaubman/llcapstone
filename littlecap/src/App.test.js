import '@testing-library/jest-dom';
import ReserveForm from './components/sectionComponents/BookingForm';

scribe("BookingPage", () =>{
  test('Testing is updating times', () => {
    render(<ReserveForm />);
    const reserveButton = screen.getByRole("Book Now");
    fireEvent.click(reserveButton);
})
})
