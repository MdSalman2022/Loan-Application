import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

function App() {

  const [key, setKey] = useState('eth');
  return (
    <div className="App">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        defaultActiveKey="eth"
        className="mb-3 "
        variant="pills"
      >
        <Tab eventKey="eth" title="ETH Transaction History">
          <Table bordered className='text-center'>
            <thead>
              <tr>

                <th>Sr</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12:30 AM</td>
                <td>487</td>
                <td>4s8er5s5fe57rjmxnfuewrurks</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10:30 AM</td>
                <td>875</td>
                <td>sf7s7ers4e7r7wser</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:30 AM </td>
                <td>797</td>
                <td>se4s7er7</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="testlink" title="TestLink Transaction History">
          <Table bordered className='text-center'>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>08:30 AM</td>
                <td>748</td>
                <td>7s7effkeurusue4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10:23 AM</td>
                <td>974</td>
                <td>sfe7r7sr4fer</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:10 AM </td>
                <td>874</td>
                <td>s4e7s8er</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
