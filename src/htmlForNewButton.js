

    const newTodoBtnForm = ` <form action="">
              <div>
                <label for="title">Title</label
                ><input name="title" type="text" id="title" required />
              </div>
              <div>
                <label for="description">Description</label
                ><input
                  name="description"
                  type="text"
                  id="description"
                  required
                />
              </div>
              <div>
                <label for="priority">Priority</label>
                <select name="priority" id="priority">
                  <option value="" disabled selected>Select an Option</option>
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </div>
              <div>
                <label for="DueDate">Duedate</label>
                <input name="DueDate" type="date" id="DueDate" required />
              </div>
              <div>
                <label for="notes">Notes</label>
                <textarea name="notes" id="notes" cols="30" rows="4"></textarea>
              </div>
              <div><label for="submit">Submit</label><button type="submit" value="Submit"></button></div>
            </form>`

const newProjectBtnForm = ` <form action="">
            <div>
            <label for="name">Name</label
            ><input name="name" type="text" required />
            </div>
           <div><label for="submit">Submit</label><button type="submit" value="Submit"></button></div>
          </form>`
export {newProjectBtnForm, newTodoBtnForm}

