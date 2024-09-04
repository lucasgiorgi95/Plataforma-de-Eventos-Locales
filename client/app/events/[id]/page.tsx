import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getEventById } from '@/utils/api';
import { Event } from '@/types/types'; 

const EventDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        const data = await getEventById(id);
        setEvent(data);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p className="text-sm text-gray-500">
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-500">{event.location}</p>
    </div>
  );
};

export default EventDetailPage;
