import React, { useState } from 'react';
import './App.css';
import { userData } from './data/userdata';
import UserCard from './components/UserCard';


const App = () => {
    const [userArr, setUserArr] = useState([...userData]);

    const handleFilterByName = (e) => {
        const resultArr = userData.filter(user => {
            return user.name === e.target.value
        });
        setUserArr(resultArr);
    };

    const handleFilterByAge = (e) => {
        const resultArr = userData.filter(user => {
            return user.age === +(e.target.value);
        });
        setUserArr(resultArr);
    };

    const handleResetFilters = () => {
        setUserArr(userData);
    };

    return(
        <>
            <header>
                <label htmlFor="inp">Find by name</label>
                <input
                    placeholder="Enter name"
                    id="inp"
                    type="search"
                    onChange = {handleFilterByName} />

                <select
                    onChange = {handleFilterByAge}>

                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                </select>

                <button onClick={handleResetFilters}>
                    Clear filters
                </button>
            </header>
            <main>
                {
                    userArr.map((userObj, i) => {
                        const generatedKey = `UserCard${userObj._id}`;
                        return <UserCard
                            user={userObj}
                            index={i}
                            key = {generatedKey}/>
                    })
                }
            </main>

            <footer>

            </footer>
        </>
    );
};

export default App;