import React from 'react';
import Calendar from './Calendar/Calendar';
import ListTodo from './ToDoList/ToDoList';
import { Container, Row, Col } from 'react-bootstrap';
import ToDoListFooter from './ToDoList/ToDoListFooter';

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Calendar />
            <ListTodo />
            <ToDoListFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomePage;
