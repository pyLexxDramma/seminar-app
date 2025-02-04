import React from 'react';
import SeminarItem from './SeminarItem';
import { Container, Row, Col } from 'react-bootstrap'; //  Импортируем компоненты
import './SeminarList.css'; //  Ваши стили (если есть)

function SeminarList({ seminars }) {
  return (
    <Container>
      <Row>
        {seminars.map(seminar => (
          <Col key={seminar.id} md={4} lg={3}> {/* Адаптивные колонки */}
            <SeminarItem seminar={seminar} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SeminarList;