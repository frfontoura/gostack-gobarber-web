import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointments,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 16</span>
            <span>Terça-Feira</span>
          </p>

          <NextAppointments>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="http://localhost:3333/files/28b4961f60032eaccf6f-ironman.jpg"
                alt="ironman"
              />

              <strong>Ironman</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointments>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/28b4961f60032eaccf6f-ironman.jpg"
                  alt="ironman"
                />

                <strong>Ironman</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/28b4961f60032eaccf6f-ironman.jpg"
                  alt="ironman"
                />

                <strong>Ironman</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/28b4961f60032eaccf6f-ironman.jpg"
                  alt="ironman"
                />

                <strong>Ironman</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/28b4961f60032eaccf6f-ironman.jpg"
                  alt="ironman"
                />

                <strong>Ironman</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
