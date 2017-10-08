/**
 * Created by lee on 5/17/17.
 */
<form action="login.do" method="post"> <input type="text" name="username" /> <input type="password" name="password" /> <input type="submit" onclick="this.disabled=true; this.value='登录中...'; this.form.submit();" value="登录" /> </form>
