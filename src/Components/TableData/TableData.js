import React from 'react';
import './TableData.css';

const TableData = () => {
    return (
        <div>
            <h3 className='text-center py-3 text-primary'>User Data Sheet</h3>
            <div className="table-main table-responsive mx-5 mx-sm-3">
                <table id='page1' className="table-bdy table table-bordered w-100 text-center">
                    <thead className='sticky-top bg-light'>
                        <tr>
                        <th scope="col">User id</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>2</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>3</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>4</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>5</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>6</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>7</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>8</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>9</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>10</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <table id='page2' className="table-bdy table table-bordered w-100 text-center">
                    <thead className='sticky-top bg-light'>
                        <tr>
                        <th scope="col">User id</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">11</th>
                            <td>11</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>12</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">13</th>
                            <td>13</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">14</th>
                            <td>14</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">15</th>
                            <td>15</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">16</th>
                            <td>16</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">17</th>
                            <td>17</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">18</th>
                            <td>18</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <th scope="row">19</th>
                            <td>19</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">20</th>
                            <td>20</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="pagination-section text-end sticky-bottom bg-white">
                    <span>1 to 100 of 200</span>
                    <span className='mx-3'><a className='text-decoration-none fw-bold fs-5 text-dark' href="#page1">&lt;</a> Page 1 of 2 <a className='text-decoration-none fw-bold fs-5 text-dark' href='#page2'>&gt;</a></span>
                </div>
            </div>
        </div>
    );
};

export default TableData;