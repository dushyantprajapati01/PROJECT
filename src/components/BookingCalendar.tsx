import React, { useState } from 'react';
import { Calendar, Clock, Check } from 'lucide-react';

// Mock available time slots for demonstration
const generateTimeSlots = (date: Date) => {
  // Generate different time slots based on the day of the week
  const day = date.getDay();
  const slots = [];
  
  // Weekends have fewer slots
  const startHour = 8;
  const endHour = day === 0 || day === 6 ? 14 : 17;
  
  for (let hour = startHour; hour <= endHour; hour++) {
    // Add :00 slot
    slots.push(`${hour}:00`);
    
    // Add :30 slot if not last hour
    if (hour < endHour) {
      slots.push(`${hour}:30`);
    }
  }
  
  return slots;
};

interface BookingCalendarProps {
  selectedService: string;
  onComplete: (bookingData: {
    service: string;
    date: string;
    time: string;
  }) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  selectedService, 
  onComplete 
}) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date;
  });
  
  // Get time slots for selected date
  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      onComplete({
        service: selectedService,
        date: formattedDate,
        time: selectedTime
      });
    }
  };
  
  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  const formatDateForDisplay = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Schedule Your Service</h2>
        
        {/* Date Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Select a Date
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isDateInPast(date)}
                className={`
                  p-3 rounded-md border text-center transition-all
                  ${isDateInPast(date) 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : selectedDate?.toDateString() === date.toDateString()
                      ? 'bg-primary text-white border-primary' 
                      : 'hover:border-primary hover:text-primary border-gray-200'
                  }
                `}
              >
                <div className="text-xs mb-1">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <div className="font-semibold">{date.getDate()}</div>
                <div className="text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Time Selection */}
        {selectedDate && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Select a Time
            </h3>
            
            {timeSlots.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {timeSlots.map((time, index) => {
                  // Convert to 12-hour format for display
                  const [hour, minute] = time.split(':');
                  const hourNum = parseInt(hour, 10);
                  const displayHour = hourNum > 12 ? hourNum - 12 : hourNum;
                  const ampm = hourNum >= 12 ? 'PM' : 'AM';
                  const displayTime = `${displayHour}:${minute} ${ampm}`;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        p-3 rounded-md border text-center transition-all
                        ${selectedTime === time
                          ? 'bg-primary text-white border-primary' 
                          : 'hover:border-primary hover:text-primary border-gray-200'
                        }
                      `}
                    >
                      {displayTime}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500">No available time slots for this date.</p>
            )}
          </div>
        )}
        
        {/* Confirmation Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedDate || !selectedTime}
            className={`
              btn flex items-center justify-center mx-auto
              ${selectedDate && selectedTime 
                ? 'btn-primary' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            <Check className="h-5 w-5 mr-2" />
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;